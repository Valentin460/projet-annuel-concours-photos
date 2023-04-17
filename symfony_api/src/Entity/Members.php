<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MembersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MembersRepository::class)]
#[ApiResource()]
class Members
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $state = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $pseudo = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_register = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_drop = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_maj = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_last_connection = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $picture_profile = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description_photographer = null;

    #[ORM\Column(length: 255)]
    private ?string $personal_state = null;

    #[ORM\Column(length: 255)]
    private ?string $category_photographer = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $website = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $social_media = null;

    #[ORM\OneToOne(inversedBy: 'members', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\OneToMany(mappedBy: 'members', targetEntity: Pictures::class)]
    private Collection $pictures;

    #[ORM\OneToMany(mappedBy: 'members', targetEntity: MembersContests::class)]
    private Collection $membersContests;

    #[ORM\OneToMany(mappedBy: 'pictures', targetEntity: MembersPictures::class)]
    private Collection $membersPictures;

    #[ORM\OneToMany(mappedBy: 'contests', targetEntity: MembersContestsWin::class)]
    private Collection $membersContestsWin;

    #[ORM\OneToMany(mappedBy: 'created_by', targetEntity: Files::class)]
    private Collection $files;

    public function __construct()
    {
        $this->pictures = new ArrayCollection();
        $this->member_vote = new ArrayCollection();
        $this->member_jury = new ArrayCollection();
        $this->membersContests = new ArrayCollection();
        $this->membersPictures = new ArrayCollection();
        $this->membersContestsWin = new ArrayCollection();
        $this->files = new ArrayCollection();
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

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(?string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getDateRegister(): ?\DateTimeInterface
    {
        return $this->date_register;
    }

    public function setDateRegister(\DateTimeInterface $date_register): self
    {
        $this->date_register = $date_register;

        return $this;
    }

    public function getDateDrop(): ?\DateTimeInterface
    {
        return $this->date_drop;
    }

    public function setDateDrop(?\DateTimeInterface $date_drop): self
    {
        $this->date_drop = $date_drop;

        return $this;
    }

    public function getDateMaj(): ?\DateTimeInterface
    {
        return $this->date_maj;
    }

    public function setDateMaj(?\DateTimeInterface $date_maj): self
    {
        $this->date_maj = $date_maj;

        return $this;
    }

    public function getDateLastConnection(): ?\DateTimeInterface
    {
        return $this->date_last_connection;
    }

    public function setDateLastConnection(?\DateTimeInterface $date_last_connection): self
    {
        $this->date_last_connection = $date_last_connection;

        return $this;
    }

    public function getPictureProfile(): ?string
    {
        return $this->picture_profile;
    }

    public function setPictureProfile(?string $picture_profile): self
    {
        $this->picture_profile = $picture_profile;

        return $this;
    }

    public function getDescriptionPhotographer(): ?string
    {
        return $this->description_photographer;
    }

    public function setDescriptionPhotographer(?string $description_photographer): self
    {
        $this->description_photographer = $description_photographer;

        return $this;
    }

    public function getPersonalState(): ?string
    {
        return $this->personal_state;
    }

    public function setPersonalState(string $personal_state): self
    {
        $this->personal_state = $personal_state;

        return $this;
    }

    public function getCategoryPhotographer(): ?string
    {
        return $this->category_photographer;
    }

    public function setCategoryPhotographer(?string $category_photographer): self
    {
        $this->category_photographer = $category_photographer;

        return $this;
    }

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(?string $website): self
    {
        $this->website = $website;

        return $this;
    }

    public function getSocialMedia(): ?string
    {
        return $this->social_media;
    }

    public function setSocialMedia(?string $social_media): self
    {
        $this->social_media = $social_media;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, Pictures>
     */
    public function getPictures(): Collection
    {
        return $this->pictures;
    }

    public function addPictures(Pictures $pictures): self
    {
        if (!$this->pictures->contains($pictures)) {
            $this->pictures->add($pictures);
            $pictures->setMembers($this);
        }

        return $this;
    }

    public function removePictures(Pictures $pictures): self
    {
        if ($this->pictures->removeElement($pictures)) {
            // set the owning side to null (unless already changed)
            if ($pictures->getMembers() === $this) {
                $pictures->setMembers($this);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MembersContests>
     */
    public function getMembersContests(): Collection
    {
        return $this->membersContests;
    }

    public function addMembersContests(MembersContests $membersContests): self
    {
        if (!$this->membersContests->contains($membersContests)) {
            $this->membersContests->add($membersContests);
            $membersContests->setMembers($this);
        }

        return $this;
    }

    public function removeMembersContests(MembersContests $membersContests): self
    {
        if ($this->membersContests->removeElement($membersContests)) {
            // set the owning side to null (unless already changed)
            if ($membersContests->getMembers() === $this) {
                $membersContests->setMembers(null);
            }
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
            $membersPictures->setPictures($this);
        }

        return $this;
    }

    public function removeMembersPictures(MembersPictures $membersPictures): self
    {
        if ($this->membersPictures->removeElement($membersPictures)) {
            // set the owning side to null (unless already changed)
            if ($membersPictures->getPictures() === $this) {
                $membersPictures->setPictures(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MembersContestsWin>
     */
    public function getMembersContestsWin(): Collection
    {
        return $this->membersContestsWin;
    }

    public function addMembersContestsWin(MembersContestsWin $membersContestsWin): self
    {
        if (!$this->membersContestsWin->contains($membersContestsWin)) {
            $this->membersContestsWin->add($membersContestsWin);
            $membersContestsWin->setContests($this);
        }

        return $this;
    }

    public function removeMembersContestsWin(MembersContestsWin $membersContestsWin): self
    {
        if ($this->membersContestsWin->removeElement($membersContestsWin)) {
            // set the owning side to null (unless already changed)
            if ($membersContestsWin->getContests() === $this) {
                $membersContestsWin->setContests(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Files>
     */
    public function getFiles(): Collection
    {
        return $this->files;
    }

    public function addFile(Files $file): self
    {
        if (!$this->files->contains($file)) {
            $this->files->add($file);
            $file->setCreatedBy($this);
        }

        return $this;
    }

    public function removeFile(Files $file): self
    {
        if ($this->files->removeElement($file)) {
            // set the owning side to null (unless already changed)
            if ($file->getCreatedBy() === $this) {
                $file->setCreatedBy(null);
            }
        }

        return $this;
    }
}
