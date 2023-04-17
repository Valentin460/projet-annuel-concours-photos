<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\OrganizationsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Context;

#[ORM\Entity(repositoryClass: OrganizationsRepository::class)]
#[ApiResource()]
class Organizations
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $state = null;

    #[ORM\Column(length: 255)]
    private ?string $name_organizations = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type_organizations = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $logo = null;

    #[ORM\Column(length: 255)]
    private ?string $adresse = null;

    #[ORM\Column(length: 255)]
    private ?string $cp = null;

    #[ORM\Column(length: 255)]
    private ?string $city = null;

    #[ORM\Column(length: 255)]
    private ?string $country = null;

    #[ORM\Column(length: 255)]
    private ?string $url_website = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $tel = null;

    #[ORM\OneToMany(mappedBy: 'organizations_publish', targetEntity: Contests::class)]
    private Collection $contests_publish;

    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'organizations')]
    private Collection $user;

    #[ORM\OneToMany(mappedBy: 'organizations', targetEntity: Advertisements::class)]
    private Collection $advertisements;

    #[ORM\OneToMany(mappedBy: 'contests', targetEntity: ContestsOrganizations::class)]
    private Collection $contestsOrganizations;

    #[ORM\OneToOne(mappedBy: 'organizations', cascade: ['persist', 'remove'])]
    private ?Files $files = null;

    public function __construct()
    {
        $this->contests = new ArrayCollection();
        $this->contests_publish = new ArrayCollection();
        $this->user = new ArrayCollection();
        $this->advertisements = new ArrayCollection();
        $this->contestsOrganizations = new ArrayCollection();
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

    public function getNameOrganizations(): ?string
    {
        return $this->name_organizations;
    }

    public function setNameOrganizations(string $name_organizations): self
    {
        $this->name_organizations = $name_organizations;

        return $this;
    }

    public function getTypeOrganizations(): ?string
    {
        return $this->type_organizations;
    }

    public function setTypeOrganizations(?string $type_organizations): self
    {
        $this->type_organizations = $type_organizations;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getCp(): ?string
    {
        return $this->cp;
    }

    public function setCp(string $cp): self
    {
        $this->cp = $cp;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getUrlWebsite(): ?string
    {
        return $this->url_website;
    }

    public function setUrlWebsite(string $url_website): self
    {
        $this->url_website = $url_website;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(string $tel): self
    {
        $this->tel = $tel;

        return $this;
    }

    /**
     * @return Collection<int, Contests>
     */
    public function getContestsPublish(): Collection
    {
        return $this->contests_publish;
    }

    public function addContestsPublish(Contests $contests_publish): self
    {
        if (!$this->contests_publish->contains($contests_publish)) {
            $this->contests_publish->add($contests_publish);
            $contests_publish->setOrganizationsPublish($this);
        }

        return $this;
    }

    public function removeContestsPublish(Contests $contests_publish): self
    {
        if ($this->contests_publish->removeElement($contests_publish)) {
            // set the owning side to null (unless already changed)
            if ($contests_publish->getOrganizationsPublish() === $this) {
                $contests_publish->setOrganizationsPublish(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, user>
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user->add($user);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        $this->user->removeElement($user);

        return $this;
    }

    /**
     * @return Collection<int, Advertisements>
     */
    public function getAdvertisements(): Collection
    {
        return $this->advertisements;
    }

    public function addAdvertisements(Advertisements $advertisements): self
    {
        if (!$this->advertisements->contains($advertisements)) {
            $this->advertisements->add($advertisements);
            $advertisements->setOrganizations($this);
        }

        return $this;
    }

    public function removeAdvertisements(Advertisements $advertisements): self
    {
        if ($this->advertisements->removeElement($advertisements)) {
            // set the owning side to null (unless already changed)
            if ($advertisements->getOrganizations() === $this) {
                $advertisements->setOrganizations(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ContestsOrganizations>
     */
    public function getContestsOrganizations(): Collection
    {
        return $this->contestsOrganizations;
    }

    public function addContestsOrganizations(ContestsOrganizations $contestsOrganizations): self
    {
        if (!$this->contestsOrganizations->contains($contestsOrganizations)) {
            $this->contestsOrganizations->add($contestsOrganizations);
            $contestsOrganizations->setContests($this);
        }

        return $this;
    }

    public function removeContestsOrganizations(ContestsOrganizations $contestsOrganizations): self
    {
        if ($this->contestsOrganizations->removeElement($contestsOrganizations)) {
            // set the owning side to null (unless already changed)
            if ($contestsOrganizations->getContests() === $this) {
                $contestsOrganizations->setContests(null);
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
            $this->files->setOrganizations(null);
        }

        // set the owning side of the relation if necessary
        if ($files !== null && $files->getOrganizations() !== $this) {
            $files->setOrganizations($this);
        }

        $this->files = $files;

        return $this;
    }
}
