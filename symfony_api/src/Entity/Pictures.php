<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PicturesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PicturesRepository::class)]
#[ApiResource()]
class Pictures
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $state = null;

    #[ORM\Column(length: 255)]
    private ?string $name_pictures = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_submissions = null;

    #[ORM\Column(length: 255)]
    private ?string $file = null;

    #[ORM\Column]
    private ?int $nb_votes = null;

    #[ORM\Column]
    private ?bool $price_win = null;

    #[ORM\Column]
    private ?int $price_rank = null;

    #[ORM\ManyToOne(inversedBy: 'pictures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Contests $contests = null;

    #[ORM\ManyToOne(inversedBy: 'pictures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Members $members = null;

    #[ORM\OneToMany(mappedBy: 'members', targetEntity: MembersPictures::class)]
    private Collection $membersPictures;

    #[ORM\OneToOne(mappedBy: 'pictures', cascade: ['persist', 'remove'])]
    private ?Files $files = null;

    public function __construct()
    {
        $this->members = new ArrayCollection();
        $this->membersPictures = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isState(): ?bool
    {
        return $this->state;
    }

    public function setState(bool $state): self
    {
        $this->state = $state;

        return $this;
    }

    public function getNamePictures(): ?string
    {
        return $this->name_pictures;
    }

    public function setNamePictures(string $name_pictures): self
    {
        $this->name_pictures = $name_pictures;

        return $this;
    }

    public function getDateSubmissions(): ?\DateTimeInterface
    {
        return $this->date_submissions;
    }

    public function setDateSubmissions(\DateTimeInterface $date_submissions): self
    {
        $this->date_submissions = $date_submissions;

        return $this;
    }

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(string $file): self
    {
        $this->file = $file;

        return $this;
    }

    public function getNbVotes(): ?int
    {
        return $this->nb_votes;
    }

    public function setNbVotes(int $nb_votes): self
    {
        $this->nb_votes = $nb_votes;

        return $this;
    }

    public function isPriceWin(): ?bool
    {
        return $this->price_win;
    }

    public function setPriceWin(bool $price_win): self
    {
        $this->price_win = $price_win;

        return $this;
    }

    public function getPriceRank(): ?int
    {
        return $this->price_rank;
    }

    public function setPriceRank(int $price_rank): self
    {
        $this->price_rank = $price_rank;

        return $this;
    }

    public function getContests(): ?Contests
    {
        return $this->contests;
    }

    public function setContests(?Contests $contests): self
    {
        $this->contests = $contests;

        return $this;
    }

    /**
     * @return Collection<int, Members>
     */
    public function getMembers(): Collection
    {
        return $this->members;
    }

    public function setMembers(Members $members): self
    {
        if (!$this->members->contains($members)) {
            $this->members->add($members);
            $members->addMembersVote($this);
        }

        return $this;
    }

    public function removeMembers(Members $members): self
    {
        if ($this->members->removeElement($members)) {
            $members->removeMembersVote($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, MembersPictures>
     */
    public function getMembersPictures(): Collection
    {
        return $this->membersPictures;
    }

    public function addMembersPictures(MembersPictures $membersPictures): self
    {
        if (!$this->membersPictures->contains($membersPictures)) {
            $this->membersPictures->add($membersPictures);
            $membersPictures->setMembers($this);
        }

        return $this;
    }

    public function removeMembersPictures(MembersPictures $membersPictures): self
    {
        if ($this->membersPictures->removeElement($membersPictures)) {
            // set the owning side to null (unless already changed)
            if ($membersPictures->getMembers() === $this) {
                $membersPictures->setMembers($this);
            }
        }

        return $this;
    }

    public function getFiles(): ?Files
    {
        return $this->files;
    }

    public function setFiles(?Files $files): self
    {
        // unset the owning side of the relation if necessary
        if ($files === null && $this->files !== null) {
            $this->files->setPictures(null);
        }

        // set the owning side of the relation if necessary
        if ($files !== null && $files->getPictures() !== $this) {
            $files->setPictures($this);
        }

        $this->files = $files;

        return $this;
    }
}
