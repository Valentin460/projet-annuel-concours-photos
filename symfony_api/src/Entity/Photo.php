<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PhotoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PhotoRepository::class)]
#[ApiResource()]
class Photo
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $etat = null;

    #[ORM\Column(length: 255)]
    private ?string $name_photo = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_soumission = null;

    #[ORM\Column(length: 255)]
    private ?string $file = null;

    #[ORM\Column]
    private ?int $nb_votes = null;

    #[ORM\Column]
    private ?bool $price_win = null;

    #[ORM\Column]
    private ?int $price_rank = null;

    #[ORM\ManyToOne(inversedBy: 'photos')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Concours $concours = null;

    #[ORM\ManyToOne(inversedBy: 'photos')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Membre $member = null;

    #[ORM\OneToMany(mappedBy: 'membre', targetEntity: MembrePhoto::class)]
    private Collection $membrePhoto;

    public function __construct()
    {
        $this->membre = new ArrayCollection();
        $this->membrePhoto = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isEtat(): ?bool
    {
        return $this->etat;
    }

    public function setEtat(bool $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getNamePhoto(): ?string
    {
        return $this->name_photo;
    }

    public function setNamePhoto(string $name_photo): self
    {
        $this->name_photo = $name_photo;

        return $this;
    }

    public function getDateSoumission(): ?\DateTimeInterface
    {
        return $this->date_soumission;
    }

    public function setDateSoumission(\DateTimeInterface $date_soumission): self
    {
        $this->date_soumission = $date_soumission;

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

    public function getConcours(): ?Concours
    {
        return $this->concours;
    }

    public function setConcours(?Concours $concours): self
    {
        $this->concours = $concours;

        return $this;
    }

    public function getMember(): ?Membre
    {
        return $this->member;
    }

    public function setMember(?Membre $member): self
    {
        $this->member = $member;

        return $this;
    }

    /**
     * @return Collection<int, Membre>
     */
    public function getMembre(): Collection
    {
        return $this->membre;
    }

    public function addMembre(Membre $membre): self
    {
        if (!$this->membre->contains($membre)) {
            $this->membre->add($membre);
            $membre->addMemberVote($this);
        }

        return $this;
    }

    public function removeMembre(Membre $membre): self
    {
        if ($this->membre->removeElement($membre)) {
            $membre->removeMemberVote($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, MembrePhoto>
     */
    public function getMembrePhoto(): Collection
    {
        return $this->membrePhoto;
    }

    public function addMembrePhoto(MembrePhoto $membrePhoto): self
    {
        if (!$this->membrePhoto->contains($membrePhoto)) {
            $this->membrePhoto->add($membrePhoto);
            $membrePhoto->setMembre($this);
        }

        return $this;
    }

    public function removeMembrePhoto(MembrePhoto $membrePhoto): self
    {
        if ($this->membrePhoto->removeElement($membrePhoto)) {
            // set the owning side to null (unless already changed)
            if ($membrePhoto->getMembre() === $this) {
                $membrePhoto->setMembre(null);
            }
        }

        return $this;
    }
}
